Rails.application.routes.draw do
  #devise_for :users
  
    devise_for :users, :controllers => {
    :registrations => "registrations"
  }
 
  resources :users, only: [:show]
  
 # root 'devise#registrations#new'
  
  #root  'dynamic_pages#e100'
  root  'dynamic_pages#home'
  
  resources :test
  resources :tdates
  
  resources :dynamic_pages, only: :index do
    collection do
      get :home
      get :help
      get :ctg
      get :ctg3
      get :ctg2
      get :ctg4
      get :e100
      get :e100_test
      get :about
      get :contact
      get :e100_rcrd
      get :e100_anlys
      get :e100_seek
      get :e100_tango
      get :e100_ave
    end
    
    member do
      
      post :test_update
     
    end
    
  end

  resources :categories
  resources :products
  resources :masters
  resources :tans
  
 # resources :users
  #root to: "dynamic_pages#home"
  
 # root to: "home#index"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
