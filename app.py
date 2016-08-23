from flask import Flask
from flask.helpers import send_file

# app = Flask(__name__)
app = Flask(__name__, static_url_path='')


@app.route('/')
def hello_world():
    return send_file('static/index.html')


if __name__ == '__main__':
    app.run()
