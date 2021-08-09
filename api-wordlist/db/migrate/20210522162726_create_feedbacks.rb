class CreateFeedbacks < ActiveRecord::Migration[6.0]
  def change
    create_table :feedbacks do |t|
      t.string :description, null: false
      t.string :email

      t.timestamps
    end
  end
end
