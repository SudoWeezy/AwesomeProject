from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import json
from setting import app

db = SQLAlchemy(app)

class Article(db.Model):
    __tablename__ = 'articles'
    id = db.Column(db.Integer, primary_key=True)
    photo = db.Column(db.String(250), nullable=False)
    time = db.Column(db.Integer)
    title = db.Column(db.String(250), nullable=False)
    text = db.Column(db.String(250), nullable=False)
    type = db.Column(db.String(250))

    def json(self):
        return {'id': self.id,
            'photo': self.photo,
            'time': self.time,
            'title': self.title,
            'text': self.text,
            'type': self.type
            }

    def add_article(_photo,_title,_text):
        new_article = Article(photo=_photo, title=_title, text=_text)
        print(new_article)
        db.session.add(new_article)
        db.session.commit()

    def get_all_articles():
        return [Article.json(article) for article in Article.query.all()]

    def get_article(_id):
        return Article.json(Article.query.filter_by(id=_id).first())

    def delete_article(_id):
        is_successful = Article.query.filter_by(id=_id).delete()
        db.session.commit()
        return bool(is_successful)

    def update_article_title(_id, _title, _text):
        article_to_update = Article.query.filter_by(id=_id).first()
        article_to_update.title = _title
        article_to_update.text = _text
        db.session.commit()

    def update_article_type(_id, _type):
        article_to_update = Article.query.filter_by(id=_id).first()
        article_to_update.type = _type
        db.session.commit()

    def __repr__(self):
        article_object = {
            'id': self.id,
            'photo': self.photo,
            'title': self.title,
            'text': self.text,
        }
        return json.dumps(article_object)
