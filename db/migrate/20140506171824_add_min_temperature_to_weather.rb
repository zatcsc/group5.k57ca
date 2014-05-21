class AddMinTemperatureToWeather < ActiveRecord::Migration
  def change
  	add_column :weathers, :min_temperature, :float
  end
end
