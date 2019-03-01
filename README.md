# node 

# Simple Hello World that listens on localhost:8080

## Local Docker:
docker build -t fingolfin/nodejs:2.0 .
docker run --name fingonode -d -p 10080:8080 fingolfin/nodejs:2.0 
curl localhost:10080
docker ps -a --filter "name=fingonode" --format "{{.ID}}" | xargs docker rm -f 

