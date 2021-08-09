class WordSerializer

  def initialize(word_object)
    @word =   word_object;
  end

  def to_serialized_json
    options = {
        :include => {
            :category => {:only => [ :name]}
        },
        :except => [:updated_at, :created_at]
    }
    @word.to_json(options);
  end

end
