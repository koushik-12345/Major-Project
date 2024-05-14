from flask import Flask, request, jsonify, render_template
import os
from model_14.h5 import generate_caption  # Import your caption generation function

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('INDEX.html')

@app.route('/generate_caption', methods=['POST'])
def generate_caption():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'})
    
    image_file = request.files['image']
    if image_file.filename == '':
        return jsonify({'error': 'No image selected'})

    # Save the uploaded image
    image_path = os.path.join('uploads', image_file.filename)
    image_file.save(image_path)

    # Generate captions for the image
    captions = generate_caption(image_path)  # Your caption generation function
    captions = [caption.capitalize() for caption in captions]  # Capitalize the captions

    # Delete the uploaded image after generating captions
    os.remove(image_path)

    return jsonify({'captions': captions})

if __name__ == '__main__':
    app.run(debug=True)
