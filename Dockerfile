FROM golang:1.23

# Set destination for COPY
WORKDIR /app

# Download Go modules
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code. Note the slash at the end, as explained in
# https://docs.docker.com/reference/dockerfile/#copy
COPY . .

RUN apt-get update && apt-get install -y libsqlite3-dev
# Build
# RUN CGO_ENABLED=0 GOOS=linux go build -o /docker-gs-ping
RUN CGO_ENABLED=1 go build -o /app/pocketbase .

# Optional:
# To bind to a TCP port, runtime parameters must be supplied to the docker command.
# But we can document in the Dockerfile what ports
# the application is going to listen on by default.
# https://docs.docker.com/reference/dockerfile/#expose
EXPOSE 8080


ENTRYPOINT ["/app/pocketbase", "serve", "--http=0.0.0.0:8080"]
