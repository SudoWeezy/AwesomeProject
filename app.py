from flask import Flask, jsonify, request, send_from_directory, Response
from ArticleModel import *
# set the project root directory as the static folder, you can set others.
from setting import *
import json
import socket
import ssl

@app.route('/articles')
def get_articles():
    return jsonify({'articles': Article.get_all_articles()})

@app.route('/articles/<int:id>')
def get_article_by_id(id):
    return_value = Article.get_article(id)
    return jsonify(return_value)

@app.route('/articles',methods=['POST'])
def add_article():
    request_data = request.get_json()
#    if (validObject(request_data)):
    if(True):
        Article.add_article(
        request_data['photo'],
        request_data['title'],
        request_data['text'])
        response = Response('', status=201, mimetype='application/json')
        return response
    else:
        invalidObjectErrorMsg = {
            "error": "Invalid object passed in request",
            "helpString": "Data passed in similar to this{id, photo, title, text}"
        }
        response = Response(json.dumps(invalidObjectErrorMsg), status=404, mimetype='application/json')
        return response

def delete_article():
    if(Article.delete_article(id)):
        response = Response("", status=204)
        return reponse

    invalidObjectErrorMsg = {
        "error": "Object with Id provided not found",        }
    response = Response(json.dumps(invalidObjectErrorMsg), status=404, mimetype='application/json')
    return response


@app.route('/articles/<int:id>', methods=['PUT'])
def replace_article(id):
    pass




#app.run(host='127.0.0.1',port=5000, ssl_context=('cert.pem', 'key.pem'))
#app.run(host='127.0.0.1',port=5000, debug=True, ssl_context=context)
#app.run(host='37.173.73.98', port=63220)
app.run(host='127.0.0.1', port=8081)
