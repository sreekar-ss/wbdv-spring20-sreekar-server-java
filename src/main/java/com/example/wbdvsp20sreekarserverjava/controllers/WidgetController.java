package test.com.example.wbdvsp20sreekarserverjava.wbdvsp20sreekarserverjava.controllers;

import test.com.example.wbdvsp20sreekarserverjava.wbdvsp20sreekarserverjava.models.Widget;
import test.com.example.wbdvsp20sreekarserverjava.wbdvsp20sreekarserverjava.services.WidgetService;
import org.springframework.web.bind.annotation.*;

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
        return service.updateWidget(widgetId, widget);
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello!";
    }

}
