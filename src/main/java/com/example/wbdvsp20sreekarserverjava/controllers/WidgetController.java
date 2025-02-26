package com.example.wbdvsp20sreekarserverjava.controllers;

import com.example.wbdvsp20sreekarserverjava.models.Widget;
import com.example.wbdvsp20sreekarserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {

    @Autowired
    WidgetService service;

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {

        return service.findAllWidgets();
    }

    @GetMapping("/api/widgets/{widgetId}")
    public Widget findWidgetById(@PathVariable("widgetId") Integer wid) {
        return service.findWidgetById(wid);
    }

    @GetMapping("/api/topics/{topicid}/widgets")
    public List<Widget> findWidgetsForTopic(@PathVariable("topicid") String topicId) {
        if(topicId.equals("undefined")){
            List<Widget> dummyList = new ArrayList<>();
            return  dummyList;
        }
        else{
            Integer tid = Integer.parseInt(topicId);
            return service.findWidgetsForTopic(tid);
        }
    }

    @DeleteMapping("/api/widgets/{widgetId}")
    public int deleteWidget(@PathVariable("widgetId") Integer wid) {
        return service.deleteWidget(wid);
    }

    @PostMapping("/api/topics/{topicid}/widgets")
    public Widget createWidget(@PathVariable("topicid") Integer topicId, @RequestBody Widget widget) {
        widget.setTopicId(topicId);
        return service.createWidget(widget);
    }

    @PostMapping("/api/topics/{topicid}/widgets/{widgetid}/up")
    public List<Widget> positionUp(@PathVariable("topicid") String topicId, @PathVariable("widgetid") String widgetId) {
        return service.positionUp(topicId, widgetId);
    }

    @PostMapping("/api/topics/{topicId}/widgets/{widgetid}/down")
    public List<Widget> positionDown(@PathVariable("topicId") String topicId, @PathVariable("widgetid") String widgetId) {
        return service.decreaseOrder(topicId,widgetId);
    }

    @PutMapping("/api/widgets/{widgetid}")
    public Widget updateWidget(@PathVariable("widgetid") String widgetId, @RequestBody Widget widget) {
        return service.updateWidget(widget);
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello!";
    }

//    @GetMapping("/api/widget")
//    public Widget getWidget() {
//        Widget w1 = new Widget("123", "Widget A");
//        return w1;
//    }

}
