class WelcomeController < ApplicationController
  def home
    
  end
  
  def about
    render "about"
  end

  def contact
  	render "contact"
  end  

  def map    
    if signed_in?
      @jam_places = Jam.all
      render 'map'
    else
      redirect_to signin_path
    end
  end  

  def submitData
     @jam_places = Jam.all
  end

  def add
    new_jam = Jam.create(:latitude => params[:jam_lat], :longtitude => params[:jam_lgn])
    if !new_jam.valid?
      flash[:error] = new_jam.errors.full_messages.join(" ").html_safe
    end
    redirect_to :action => 'submitData'
  end

end
