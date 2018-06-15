class DynamicPagesController < ApplicationController
 
  before_action :authenticate_user!
  before_action :purchase_check
  
  def purchase_check
    redirect_to "http://kir877636.kir.jp/a_credit.html" if current_user.purchase.nil?
  end
  
 def home
  
    @products1=Product.where(p:1)
    @products2=Product.where(p:2)
    @products3=Product.where(p:3) 
 end
    
 def ctg
       
       @categories = Category.where(product_id: params[:product_id])
        
        #@product = Product.find_by_id(params[:product_id])
        #@tdates = Tdate.where(product_id: params[:product_id]) 
        
        #@page_title = @product.pnam
      
  end
  
  def e100
   
      @masters = Master.all.page(params[:page])
      
      if @masters.count!=0
     
      flash[:warning] =""
     
      end
 
  end
  
  def e100_seek
  
      fstr = params[:fstr]
   
      @masters = Master.where("e like '%" + fstr + "%'").page(params[:page])
      
      if @masters.count==0
        
         @masters = Master.where("j like '%" + fstr + "%'").page(params[:page])
         
         if @masters.count==0
       
            flash[:warning] = fstr + "：" + "0件 該当なし。"
            
          else
          
            str= @masters.count.to_s
             
            flash[:warning] = fstr + "：" + str  + "件"
      
          end
        
      else
          
         str= @masters.count.to_s
         val= fstr + "：" + str  + "件"
          
         flash[:warning] = val
      
     end
      
      render action: :e100
     
  end
  
  
  
 
end
