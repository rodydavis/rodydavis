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
RUN CGO_ENABLED=1 go build -o /app/pocketbase .

EXPOSE 8090

VOLUME /app/pb_data


ENTRYPOINT ["/app/pocketbase", "serve", "--http=0.0.0.0:8090"]
