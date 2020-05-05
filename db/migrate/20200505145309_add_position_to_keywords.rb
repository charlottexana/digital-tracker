class AddPositionToKeywords < ActiveRecord::Migration[5.2]
  def change
    add_column :keywords, :position, :integer
  end
end
