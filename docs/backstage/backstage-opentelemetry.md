# backstage-opentelemetry


## Available Metrics    

- `catalog_entities_count`: Total amount of entities in the catalog
- `catalog_registered_locations_count`: Total amount of registered locations in the catalog
- `catalog_relations_count`: Total amount of relations between entities
- `catalog.processed.entities.count`: Amount of entities processed
- `catalog.processing.duration`: Time spent executing the full processing flow
- `catalog.processors.duration`: Time spent executing catalog processors
- `catalog.processing.queue.delay`: The amount of delay between being scheduled for processing, and the start of actually being processed
- `catalog.stitched.entities.count`: Amount of entities stitched
- `catalog.stitching.duration`: Time spent executing the full stitching flow
- `catalog.stitching.queue.length`: Number of entities currently in the stitching queue
- `catalog.stitching.queue.delay`: The amount of delay between being scheduled for stitching, and the start of actually being stitched
- `scaffolder.task.count`: Count of task runs
- `scaffolder.task.duration`: Duration of a task run
- `scaffolder.step.count`: Count of step runs
- `scaffolder.step.duration`: Duration of a step runs
- `backend_tasks.task.runs.count`: Total number of times a task has been run
- `backend_tasks.task.runs.duration`: Histogram of task run durations
