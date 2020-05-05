class RemoveDateFromKeywords < ActiveRecord::Migration[5.2]
  def change
    remove_column :keywords, :date, :date
  end
end
