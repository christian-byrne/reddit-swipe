
# Network Tools and Sockets


## `wget`

`wget` will download a file onto the local machine

 - great for images
 - with `-r`, useful for "spidering" a website


## `curl`

```bash
# cat a url
curl <url>

# Don't show a progres bar
curl -s <url>

# Protocol details, for learning about HTTP
curl -v <url>

# throw away real page



curl -v -s <url> >/dev/null
```


## `telnet`

- ancient login tool like `ssh` but without encryption
- Since it's so simple, it can be abused as a raw socket simulator

```bash
telnet www.google.com 80
```

```bash
# Inside interactive terminal
GET /
```

## `netcat`

```bash
nc foo.com 8080
```

- Can be abused as a "raw socket simulator"

## Ports

- Most network protocols have a default port


## Sockets


- We connect computers using something called a socket
- Every socket is made up of two pipes, one in each direction
- This discussion is about TCP. Other protocols exist.
- Sockets typically send data back and forth.
- Sometimes, it is symmetric, but more commonly the two endpoints have diferent roles. 
- Often, many computers want to connect to a single server
  - The server makes itself available by creating a listening socket
  - Clients can connect to the server using the listening socket
- If you attempt to connect to a server that is not listening, you are rejected. 


### Servers

- Servers often offer many different services
- You can open many listening sockets
- Each one listens on a different port

### Sockets in Python


- 2 Types of Sockets
  - listening
    - represent open server ports
    - never can send/receive data
    - call `accept()`
      - Blocks until a connection comes in 
      - Returns a new connected socket
      - Loop back, call `accept()` again to wait for next
  - connected
    - Created 2 ways
      - client side: `connect()`
      - server side: `accept()` from a listening socket
    - Once created, both types work the same
- Connected sockets (server or client) can
  - send data
  - recv data
- Always have to consider the possibility that data might move slowly. What happens if you have to wait a while?
  - `recv()` will block until some data arrives, but may
not fill the buffer you provide
  - `send()` may not be able to send all of the data; I
recommend you use sendall() to solve this

#### Unicode vs Bytes

Python3 strings are unicode (multi-byte) but
networks send bytes.
● Use .encode() to convert a str to bytes
● Use .decode() to convert a bytes to str

#### `recv()`

Use recv() to read data from a connected
socket.
– The parameter is the max length that you are
willing to read. You might read less.
– Returns empty string only if the socket has been
closed on the other end.
– If you’re reading string data (not a binary file), make
sure to decode
data = sock.recv(1024).decode()

#### `sendall()`

●
Use sendall() to send data down a
connected socket.
– The parameter is the payload.
– Make sure to encode, if your payload is a Python3
str
msg = “Hello world”
sock.sendall(msg.encode())
●
Avoid send() until you are more experienced;
74
it can sometimes send only part of the data.

#### `close()`

●
Make sure to close() every socket when
you’re done with it!
–
Especially on the server, you are going to be
creating lots of sockets, it’s possible to run
out.



#### Single-Threaded Server Example

```python
from socket import *
server_sock = socket()

# 0.0.0.0 means "listen on all network interfaces"
server_addr = (“0.0.0.0”, PORT)
server_sock.bind(server_addr)
server_sock.listen(5)
while True:

    # Block until the next incoming connection arrives. 
    # When it arrives, it will create a connected socket and return it
    (conn_sock,conn_addr) = \
        server_sock.accept()

    # Helper function takes a connected socket and does whatever your server does and then eventually diconnects
    do_work(conn_sock)
```


#### Single-Threaded Client Example

```python
from socket import *

sock = socket*()

addr = (SERVER_NAME, PORT)
sock.connect(addr)
do_client(sock)
```





