class AddStatusToWeather < ActiveRecord::Migration
  def change
  	add_column :weathers, :status, :string
  end
end
