package com.example.wbdvsp20sreekarserverjava.controllers;

import com.example.wbdvsp20sreekarserverjava.models.Widget;
import com.example.wbdvsp20sreekarserverjava.services.WidgetService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {

    WidgetService service = new WidgetService();

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {

        return service.findAllWidgets();
    }

    @GetMapping("/api/widgets/{widgetId}")
    public Widget findWidgetById(@PathVariable("widgetId") String wid) {
        return service.findWidgetById(wid);
    }

    @GetMapping("/api/topics/{topicid}/widgets")
    public List<Widget> findWidgetsForTopic(@PathVariable("topicid") String topicId) {
        return service.findWidgetsForTopic(topicId);
    }


    @GetMapping("/api/widget")
    public Widget getWidget() {
        Widget w1 = new Widget("123", "Widget A");
        return w1;
    }

    @DeleteMapping("/api/widgets/{widgetId}")
    public int deleteWidget(@PathVariable("widgetId") String wid) {
        return service.deleteWidget(wid);
    }

    @PostMapping("/api/topics/{topicid}/widgets")
    public Widget createWidget(@PathVariable("topicid") String topicId, @RequestBody Widget widget) {
        widget.setTopicId(topicId);
        return service.createWidget(widget);
    }


    @GetMapping("/hello")
    public String sayHello() {
        return "Hello!";
    }

}
