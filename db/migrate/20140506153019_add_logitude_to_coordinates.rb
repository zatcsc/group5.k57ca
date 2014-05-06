class AddLogitudeToCoordinates < ActiveRecord::Migration
  def change
  	add_column :coordinates, :logitude, :float
  end
end
