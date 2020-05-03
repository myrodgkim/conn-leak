#!/bin/bash

echo -n "Enter RDS_HOSTNAME : "
read p; export RDS_HOSTNAME=$p

echo -n "Enter RDS_PORT : "
read p; export RDS_PORT=$p

echo -n "Enter RDS_USERNAME : "
read p; export RDS_USERNAME=$p

echo -n "Enter RDS_PASSWORD : "
read p; export RDS_PASSWORD=$p

echo -n "Enter RDS_DATABASE : "
read p; export RDS_DATABASE=$p
