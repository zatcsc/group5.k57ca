require 'open-uri'

class WelcomeController < ApplicationController

  def about
    render "about"
  end

  def contact
    render "contact"
  end

  def submit
    if signed_in?
      @jam_places = Jam.all
      render "submit"
    else
      redirect_to signin_path
    end
  end

  def add
    new_jam = Jam.create(:lat => params[:jam_lat], :lng => params[:jam_lng],
    :reason => params[:jam_reason], :place => params[:jam_place])
    if !new_jam.valid?
      flash[:error] = "There were some input errors. Please input again."
    else
      flash[:success] = "Added successfully."
    end
    redirect_to :action => 'submit'
  end

  def clear
    params[:jam_checkbox].each do |check|
      target = Jam.find_by_id(check)
      target.destroy
    end
    redirect_to :action => 'submit'
  end

  def map
    if signed_in?
      @jam_places = Jam.all
      render 'map'
    else
      redirect_to signin_path
    end
  end

  def weather
    @city_id =  params[:city_id]
    @xml_url = 'http://api.openweathermap.org/data/2.5/weather?id=' + @city_id
    @weather_xml = open(@xml_url).read
    @data = ActiveSupport::JSON.decode(@weather_xml)
    respond_to do |format|
      format.html { render 'weather', layout: false }
    end
  end
end
