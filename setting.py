from flask import Flask

app = Flask(__name__, static_url_path='')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/weezy/Desktop/AwesomeProject/database.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
