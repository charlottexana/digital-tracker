class BrandsController < ApplicationController
  def index
    @brands = Brand.new
  end
end
