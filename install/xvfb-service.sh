# source https://gist.github.com/jterrace/2911875
# put the contents of the gist as a file residing at /etc/init.d/xvfb
# you'll probably need to make it executable chmod +x /etc/init.d/xvfb
# and then you can start it with /etc/init.d/xvfb start

XVFB=/usr/bin/Xvfb
XVFBARGS=":10 -screen 0 1024x768x24 -ac +extension GLX +render -noreset"
PIDFILE=/var/run/xvfb.pid
case "$1" in
start)
echo -n "Starting virtual X frame buffer: Xvfb"
start-stop-daemon --start --quiet --pidfile $PIDFILE --make-pidfile --background --exec $XVFB -- $XVFBARGS
echo "."
;;
stop)
echo -n "Stopping virtual X frame buffer: Xvfb"
start-stop-daemon --stop --quiet --pidfile $PIDFILE
echo "."
;;
restart)
$0 stop
$0 start
;;
*)
echo "Usage: /etc/init.d/xvfb {start|stop|restart}"
exit 1
esac

exit 0
