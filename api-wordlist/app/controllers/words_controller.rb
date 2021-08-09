class WordsController < ApplicationController
  before_action :set_word, only: [:show, :update, :destroy]

  # GET /words
  def index
    words = Word.all

    render json: WordSerializer.new(words).to_serialized_json
  end

  # GET /words/1
  def show
    word = Word.find_by(id: params[:id])
    render json: WordSerializer.new(word).to_serialized_json
  end

  # POST /words
  def create
    word = Word.new(word_params)

    if word.save
      render json: WordSerializer.new(word).to_serialized_json, status: :created, location: word
    else
      render json: word.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /words/1
  def update
    if @word.update(word_params)
      render json: @word
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # DELETE /words/1
  def destroy
    @word.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_word
      @word = Word.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def word_params
      params.require(:word).permit(:word, :definition, :sentence, :category_id)
    end
end
