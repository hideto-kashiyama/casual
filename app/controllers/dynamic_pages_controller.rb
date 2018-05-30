class DynamicPagesController < ApplicationController
 #before_action :authenticate_user!
 def home
  
    @products1=Product.where(p:1)
    @products2=Product.where(p:2)
    
 end
    
 def ctg
       
       @categories = Category.where(product_id: params[:product_id])
        
        #@product = Product.find_by_id(params[:product_id])
        #@tdates = Tdate.where(product_id: params[:product_id]) 
        
        #@page_title = @product.pnam
      
  end
  
  def e100
   
    # @ctg = Category.find_by_id(params[:category_id])
    
    # @masters = Master.where(category_id: params[:category_id] and page: 1)
      @masters = Master.all.page(params[:page])
      #@masters1 = Master.where(category_id: params[:category_id])
      
      #@masters_cnt=@masters1.count
     
      #@product = Product.find_by_id(@ctg.product_id)
     
    # @page_title = @product.pnam
    
  end
  
 
  
  def e100_seek
  
      fstr = params[:fstr]
   
      @masters = Master.where("e like '%" + fstr + "%'").page(params[:page])
      
      if @masters.count==0
       
         flash[:warning] = "該当するデータがありません。"
      
     end
      
      render action: :e100
     
  end
 
end
