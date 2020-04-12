class KeywordsController < ApplicationController
  def index
    @keywords = Keyword.all
  end

  def show
    @keyword = Keyword.find(params[:id])
  end

  def new
    @keyword = Keyword.new
  end

  def create
    @keyword = Keyword.new(keyword_params)
    @keyword.save
  end

  def edit
    @keyword = Keyword.find(params[:id])
  end

  def update
    @keyword = Keyword.find(params[:id])
    @keyword.update(keyword_params)
  end

  private

  def keyword_params
    params.require(:keyword).permit(:name, :date, :current_rank)
  end

end
