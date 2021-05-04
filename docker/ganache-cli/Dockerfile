FROM trufflesuite/ganache-cli:latest

COPY ganache-startup-script.sh /app/

RUN /bin/sh -c "apk add --no-cache bash"
ENTRYPOINT bash ganache-startup-script.sh