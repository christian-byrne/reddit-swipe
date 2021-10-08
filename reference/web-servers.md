
# Web Servers

Apache (oper source), Lnginx (open source), IIS (Miscrosoft)

```bash
apt-get install apache2
service apache2 start
```

Auto start server by changing entry point of image.

## Port Forwarding

Port forwarding allows programs outside your containers to access servers inside your containers


```bash
# docker run -p address:external:internal image
docker run -p -ti 127.0.0.1:8080:70 [image]
```

- You access through the external port
- Container accesses through internal port
- If we change the server address to 0.0.0.0, (or omit it) then any computer can use the port (if they know your IP address)
- use `docker ps` to see open ports
- It is not possible to forward the same external port to all internal servers
  - Or, set up a load balancer that spreads requests across the multiple servers
    - Normally load balancers spread across multiple physical machines
- If we only give one port on the command line, it is internal – and the external port is random.
### Expose Default Port

give the outside world access to your container’s server

```bash
docker run -p 80:80 [image]
```


## Container Networking

- Docker is the default gateway for your containers
- Docker does NAT
  - can be changed

## CGI

Common Gateway Interface allows you to run programs, which generate files that the web browser will see


– Web server doesn’t actually share the file contents
– Instead, shares the command output

```bash
cd /etc/apache/mods-enabled
ln -s ../mods-available/cgi.load .
service apache2 restart

# CGI Scripts Location:
ls /usr/lib/cgi-bin
```


Files written to the CGI directory will become executable pages on the website, at



- When a web client attempts to access the file /cgi-bin/asdf.py , the server automatically executes /usr/lib/cgi-bin/asdf.py
  - Need shebang line
  - Need execute permissions
- Output from script becomes the response to the
user


### Example CGI Script

```python
#! /usr/bin/python3

# All of your scripts should report a
# Status and Content-Type.
print("Status: 200 OK")
print("Content-Type: text/plain")
print() # Marks the end of headers

# Actual file content.
print("Hello world")
```


### CGI Variables

- Variables can be passed to your CGI scripts in a variety of ways.
- Encode in URL

```python
# http://foo.com/cgi-bin/thing.py?asdf=1&jkl=2

import cgi
form = cgi.FieldStorage()

if “asdf” in form:
    asdf = form[“asdf”].value
else:
    asdf = None
```






