# https://developers.home-assistant.io/docs/add-ons/configuration#add-on-dockerfile
ARG BUILD_FROM


##########################
# Frontend Build Routine #
##########################
FROM node AS frontend_build

WORKDIR /frontend
COPY frontend .
RUN ls -la
RUN yarn
RUN yarn build


####################
# Main Addon Build #
####################

FROM $BUILD_FROM

# Execute during the build of the image
ARG TEMPIO_VERSION BUILD_ARCH
RUN \
    curl -sSLf -o /usr/bin/tempio \
    "https://github.com/home-assistant/tempio/releases/download/${TEMPIO_VERSION}/tempio_${BUILD_ARCH}"

# Install requirements for add-on
RUN \
    apk add --no-cache \
    python3

# Add nginx and create the run folder for nginx.
RUN \
    apk --no-cache add \
    nginx \
    \
    && mkdir -p /run/nginx

# Copy our ingress conf into the nginx http.d folder.
# @TODO move file to rootfs instead?
COPY ingress.conf /etc/nginx/http.d/

# Copy root filesystem
COPY rootfs /

# Copy Frontend build artifacts from earlier build stage
WORKDIR /etc/services.d/frontend/public
COPY --from=frontend_build /frontend/dist .
