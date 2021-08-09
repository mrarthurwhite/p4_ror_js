class FeedbackSerializer

  def initialize(fb_object)
    @feedback =   fb_object;
  end

  def to_serialized_json
    options = {
        :except => [:updated_at, :created_at]
    }
    @feedback.to_json(options);
  end

end
