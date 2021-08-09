class CategorySerializer

  def initialize(category_object)
    @category =   category_object;
  end

  def to_serialized_json
    options = {
        :include => [ :words ],
          :except => [:updated_at, :created_at]
    };
    @category.to_json(options);
  end

end
