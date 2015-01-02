PID=$( pgrep -a Xvfb | grep ':21' |  cut -f1 -d' ' )
if [[ $PID =~ ^[0-9]+$  ]]
then
  echo "found Xvfb localhost, killing process"
  kill -- $PID
  #rm -f /tmp/.X21-lock
fi

