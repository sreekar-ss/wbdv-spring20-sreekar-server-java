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


    @GetMapping("/api/widget")
    public Widget getWidget() {
        Widget w1 = new Widget("123", "Widget A");
        return w1;
    }

    @DeleteMapping("/api/widgets/{widgetId}")
    public void deleteWidget(@PathVariable("widgetId") String wid) {
        service.deleteWidget(wid);
    }

    @PostMapping("/api/widgets")
    public Widget createWidget(@RequestBody Widget widget) {
        return service.createWidget(widget);
    }


    @GetMapping("/hello")
    public String sayHello() {
        return "Hello!";
    }

}
