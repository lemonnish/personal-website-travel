FROM alpine:3.6

# modified from Abiola Ibrahim's abiosoft/caddy Dockerfile

ARG plugins=http.cgi

RUN apk add --no-cache openssh-client python3 git tar curl

RUN curl --silent --show-error --fail --location \
      --header "Accept: application/tar+gzip, application/x-gzip, application/octet-stream" -o - \
      "https://caddyserver.com/download/linux/amd64?plugins=${plugins}" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy \
 && chmod 0755 /usr/bin/caddy \
 && /usr/bin/caddy -version

EXPOSE 80 443 2015
VOLUME /root/.caddy

COPY Caddyfile /etc/Caddyfile

ENTRYPOINT ["/usr/bin/caddy"]

COPY _site /srv/www/making-trails
COPY cgi-bin /srv/cgi-bin

RUN chmod +x /srv/cgi-bin/*

RUN mkdir -p /var/log/caddy
