class CreateGas < ActiveRecord::Migration[5.2]
  def change
    create_table :gas do |t|

      t.timestamps
    end
  end
end
