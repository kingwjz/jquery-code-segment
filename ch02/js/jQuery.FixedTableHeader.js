jQuery.fn.CloneTableHeader = function(tableId, tableParentDivId) {
    var obj = document.getElementById("tableHeaderDiv" + tableId);
    if (obj) {
        jQuery(obj).remove();
    }
    var browserName = navigator.appName;
    var ver = navigator.appVersion;
    var browserVersion = parseFloat(ver.substring(ver.indexOf("MSIE") + 5, ver.lastIndexOf("Windows")));
    var content = document.getElementById(tableParentDivId);
    var scrollWidth = content.offsetWidth - content.clientWidth;
    var tableOrg = jQuery("#" + tableId)
    var table = tableOrg.clone();
    table.attr("id", "cloneTable");
    var tableClone = jQuery(tableOrg).find("tr").each(function() {
    });
    var tableHeader = jQuery(tableOrg).find("thead");
    var tableHeaderHeight = tableHeader.height();
    tableHeader.hide();
    var colsWidths = jQuery(tableOrg).find("tbody tr:first td").map(function() {
        return jQuery(this).width();
    });
    var tableCloneCols = jQuery(table).find("thead tr:first td")
    if (colsWidths.size() > 0) {
        for (i = 0; i < tableCloneCols.size(); i++) {
            if (i == tableCloneCols.size() - 1) {
                if (browserVersion == 8.0)
                    tableCloneCols.eq(i).width(colsWidths[i] + scrollWidth);
                else
                    tableCloneCols.eq(i).width(colsWidths[i]);
            } else {
                tableCloneCols.eq(i).width(colsWidths[i]);
            }
        }
    }
    var headerDiv = document.createElement("div");
    headerDiv.appendChild(table[0]);
    jQuery(headerDiv).css("height", tableHeaderHeight);
    jQuery(headerDiv).css("overflow", "hidden");
    jQuery(headerDiv).css("z-index", "20");
    jQuery(headerDiv).css("width", "100%");
    jQuery(headerDiv).attr("id", "tableHeaderDiv" + tableId);
    jQuery(headerDiv).insertBefore(tableOrg.parent());
}