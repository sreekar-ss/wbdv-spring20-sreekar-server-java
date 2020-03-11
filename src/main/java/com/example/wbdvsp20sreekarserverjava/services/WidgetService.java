package com.example.wbdvsp20sreekarserverjava.services;

import com.example.wbdvsp20sreekarserverjava.models.Widget;
import com.example.wbdvsp20sreekarserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository widgetRepository;





//    List<Widget> widgetList = new ArrayList<Widget>();
//
//    {
//        Widget w1 = new Widget("123", "Widget A");
//        Widget w2 = new Widget("234", "Widget B");
//        Widget w3 = new Widget("345", "Widget C");
//
//        w1.setTopicId("111");w1.setType("PARAGRAPH");
//        w2.setTopicId("111");w2.setType("HEADING");
//        w3.setTopicId("111");w2.setType("PARAGRAPH");
//
////        widgetList.add(w1);
////        widgetList.add(w2);
////        widgetList.add(w3);
//
//    }

//    public Widget findWidgetById(String wid) {
//        for(Widget widget : widgetList){
//            if(widget.getId().equals(wid)){
//                return widget;
//            }
//        }
//        return null;
//    }

//    public Widget createWidget(Widget widget) {
//        widgetList.add(widget);
        //widget.setIndex(widgetList.indexOf(widget));
//        return null;
//    }


//    public int deleteWidget(String wid){
//        widgetList = widgetList
//                .stream()
//                .filter(w -> !w.getId().equals(wid))
//                .collect(Collectors.toList());
//        return 1;
//    }

    public Widget updateWidget(String wid, Widget widget) {
//        widgetList = widgetList
//                .stream()
//                .filter(w -> !w.getId().equals(wid))
//                .collect(Collectors.toList());
//        widgetList.add(widget);
        return null;
    }

    public List<Widget> positionUp(String topicId, String widgetId) {
//
//        for (Widget w: widgetList){
//            if(w.getId().equals(widgetId)){
//                int desiredIndex = w.getIndex();
//                Collections.swap(widgetList,desiredIndex-1, desiredIndex);
//            }
//        }
//        for (Widget w: widgetList){
//            w.setIndex(widgetList.indexOf(w));
//        }
//
//        List<Widget> results = new ArrayList<Widget>();
//        for(Widget w: widgetList){
//            if (w.getTopicId().equals(topicId)){
//                results.add(w);
//            }
//        }
        return null;
    }


    public List<Widget> decreaseOrder(String topicId, String widgetId){
//        for (Widget w: widgetList){
//            if(w.getId().equals(widgetId)){
//                int desiredIndex = w.getIndex();
//                Collections.swap(widgetList,desiredIndex, desiredIndex+1);
//                break;
//                //return widgetList;
//            }
//        }
//        for (Widget w1: widgetList){
//            w1.setIndex(widgetList.indexOf(w1));
//        }
//
//        List<Widget> results = new ArrayList<Widget>();
//        for(Widget w1: widgetList){
//            if (w1.getTopicId().equals(topicId)){
//                results.add(w1);
//            }
//        }
        return null;
    }



//    public int positionDown(Widget widget) {
//        int desiredIndex = widgetList.indexOf(widget) + 1;
//        Widget tempWidget = widgetList.remove(widgetList.indexOf(widget));
//        widgetList.add(desiredIndex, tempWidget);
//
//        for (Widget w: widgetList){
//            w.setIndex(widgetList.indexOf(w));
//        }
//        return 1;
//    }

//    public List<Widget> findWidgetsForTopic(String topicId) {
//        List<Widget> results = new ArrayList<Widget>();
//        for(Widget w: widgetList){
//            if (w.getTopicId().equals(topicId)){
//                results.add(w);
//            }
//        }
//        return null;
//    }




// Latest implementation

    public List<Widget> findAllWidgets() {

        return (List<Widget>) widgetRepository.findAll();
    }

    public Widget findWidgetById(Integer wid) {

        return widgetRepository.findById(wid).get();
    }

    public List<Widget> findWidgetsForTopic(Integer topicId) {
        return widgetRepository.findWidgetsForTopic(topicId);
    }

    public int deleteWidget(Integer wid){
        widgetRepository.deleteById(wid);
        return 1;
    }

    public Widget createWidget(Widget widget) {

        return widgetRepository.save(widget);
    }


}
