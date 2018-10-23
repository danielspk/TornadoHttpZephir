#!/bin/bash

echo "Build"
zephir build -Wnonexistent-class

echo "Restart Apache"
sudo service apache2 restart
