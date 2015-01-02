PID=$( pgrep -a node | grep http-server | grep localhost | cut -f1 -d' ' )
if [[ $PID =~ ^[0-9]+$  ]]
then
  echo "found http-server localhost, killing process"
  kill -- $PID
fi

