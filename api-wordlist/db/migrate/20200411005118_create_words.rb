class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :word
      t.string :definition
      t.text :sentence
      t.integer :category_id

      t.timestamps
    end
  end
end
