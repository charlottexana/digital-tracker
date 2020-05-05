class RemoveCurrentRankFromKeywords < ActiveRecord::Migration[5.2]
  def change
    remove_column :keywords, :current_rank, :integer
  end
end
