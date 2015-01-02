PID=$( pgrep -a node | grep webdriver-manager | cut -f1 -d' ' )
if [[ $PID =~ ^[0-9]+$  ]]
then
  echo "found webdriver, killing process"
  kill -- $PID
fi
PID=$( pgrep -a java | grep selenium-server | cut -f1 -d' ' | head -1 )
if [[ $PID =~ ^[0-9]+$  ]]
then
  echo "found selenium-server, killing process"
  kill -- $PID
fi
