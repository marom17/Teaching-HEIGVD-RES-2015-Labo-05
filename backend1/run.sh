#!/bin/bash
chown www-data:www-data /app -R
pm2 start -x /app/apache.sh
pm2 start /app/hearthbeat.js
pm2 monit

