module ApplicationHelper
    
    def bootstrap_class_for(flash_type)
    case flash_type
      when :success
        "alert-success"
      when :error
        "alert-danger"
      when :alert
        "alert-warning"
      when :notice
        "alert-info"
      else
        flash_type.to_s
    end
  end
  
  def full_title(page_title)
    base_title = "English Conversation 100 - Election series"
    if page_title.empty?
      base_title
    else
      "#{page_title} | #{base_title}"
    end
  end
  
  
end
    

  