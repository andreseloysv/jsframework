var #namespace = #namespace || {};
#namespace.#Name = #namespace.#Name || (function (jQuery)
{
    var #Name = function (initValues)
    {
        var jWindow = jQuery(window);
        var jBody = jQuery("body");
        
        jQuery.extend(true, this,
        {
            jWindow: jWindow,
            jBody: jBody
        },initValues,
        {
            
        });
        
        initView.call(this);
    };
    
    var initView = function initView()
    {
        attachEventHandler.call(this);
    };
    
    var attachEventHandler = function attachEventHandler()
    {

    };
    
    return #Name;
}(jQuery));