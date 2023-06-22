from flask import Flask, request
import json
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def index():
    return 'F api v1'

@app.route('/register', methods=['GET'])
def req():
    print(request.args)


    mail = request.args.get('mail')
    psw = request.args.get('psw')
    number = request.args.get('num')

    print(mail, psw, number)
    
    data = {
        'message': mail + ' ' +  psw + ' ' + number,
        'status': 'success'
    } 

    return 'data'

if __name__ == '__main__':
    # app.run()
    app.run(debug=True, port=5000, host='0.0.0.0')