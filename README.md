# gcs-frontend
This is just a test front end application.

It has two parts:

* public - This is what gets served via the web browser

* backend - This is what serves the public files.

Dependencies:

This app is looking for gcs-api as a data source.

# How to build?

Building is done via npm, so `npm install` on both sides should take care of it.

# How to run?

Once you have run `npm install` on both parts, then just `npm start`.

# How to run via docker?

docker run -d -p 9090:9090 gcsfront

# Licensing

MIT was selected for this project.
