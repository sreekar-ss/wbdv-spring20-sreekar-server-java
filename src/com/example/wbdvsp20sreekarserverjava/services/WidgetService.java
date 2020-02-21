package com.example.wbdvsp20sreekarserverjava.services;

import com.example.wbdvsp20sreekarserverjava.models.Widget;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class WidgetService {

    List<Widget> widgetList = new ArrayList<Widget>();

    {
        Widget w1 = new Widget("123", "Widget A");
        Widget w2 = new Widget("234", "Widget B");
        Widget w3 = new Widget("345", "Widget C");

        w1.setTopicId("111");w1.setType("PARAGRAPH");
        w2.setTopicId("111");w2.setType("HEADING");
        w3.setTopicId("111");w2.setType("PARAGRAPH");

        widgetList.add(w1);
        widgetList.add(w2);
        widgetList.add(w3);
    }

    public Widget findWidgetById(String wid) {
        for(Widget widget : widgetList){
            if(widget.getId().equals(wid)){
                return widget;
            }
        }
        return null;
    }

    public Widget createWidget(Widget widget) {
        widgetList.add(widget);
        return widget;
    }


    public int deleteWidget(String wid){
        widgetList = widgetList
                .stream()
                .filter(w -> !w.getId().equals(wid))
                .collect(Collectors.toList());
        return 1;
    }


    public List<Widget> findWidgetsForTopic(String topicId) {
        List<Widget> results = new ArrayList<Widget>();
        for(Widget w: widgetList){
            if (w.getTopicId().equals(topicId)){
                results.add(w);
            }
        }
        return results;
    }

    public List<Widget> findAllWidgets() {

        return widgetList;
    }



}
