class CreateJams < ActiveRecord::Migration
  def change
    create_table :jams do |t|
      t.float :lat
      t.float :lng
      t.string :reason

      t.timestamps
    end
  end
end
